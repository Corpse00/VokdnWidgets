const fs = require('fs');
const path = require('path');

// Configure directory paths
const WIDGETS_DIR = './widgets'; // Adjust to your widgets directory path
const OUTPUT_FILE = './forward-widgets.fwd';

// Create temp directory for preprocessed files
const TEMP_DIR = path.join(__dirname, 'temp_widgets');
if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

// Extract WidgetMetadata by creating a temporary file
function extractWidgetMetadata(filePath) {
  try {
    const fileName = path.basename(filePath);
    const tempFilePath = path.join(TEMP_DIR, fileName);

    // Read original file content
    const content = fs.readFileSync(filePath, 'utf8');

    // Create a temporary module to expose WidgetMetadata as module export
    const wrappedContent = `
      let exportedMetadata;
      
      // Capture WidgetMetadata object
      global.WidgetMetadata = function(metadata) {
        exportedMetadata = metadata;
        return metadata;
      };
      
      // If in assignment form, e.g. WidgetMetadata = {...}
      Object.defineProperty(global, 'WidgetMetadata', {
        set: function(value) {
          exportedMetadata = value;
        },
        get: function() {
          return function(metadata) {
            exportedMetadata = metadata;
            return metadata;
          }
        }
      });
      
      // Execute original widget code
      ${content}
      
      module.exports = exportedMetadata;
    `;

    // Write to temporary file
    fs.writeFileSync(tempFilePath, wrappedContent);

    // Try to import temporary module
    const modulePath = require.resolve(tempFilePath);
    const metadata = require(modulePath);

    // Clear cache so if run again with changed code, we get new result
    delete require.cache[modulePath];

    if (!metadata) {
      console.warn(`WidgetMetadata not found in file ${filePath}`);
      return null;
    }

    // Extract required fields
    const { id, title, description, requiredVersion, version, author } = metadata;

    const url = `https://raw.githubusercontent.com/Corpse00/ForwardWidgets/master/widgets/${fileName}`

    return { id, title, description, requiredVersion, version, author, url };
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
    return null;
  }
}

async function main() {
  try {
    // Ensure widgets directory exists
    if (!fs.existsSync(WIDGETS_DIR)) {
      console.error(`Directory ${WIDGETS_DIR} does not exist`);
      process.exit(1);
    }

    // Get all JS files in widgets directory
    const files = fs.readdirSync(WIDGETS_DIR)
      .filter(file => file.endsWith('.js'))
      .map(file => path.join(WIDGETS_DIR, file));

    console.log(`Found ${files.length} JS files to process`);

    // Process each file and extract metadata
    const widgetIndex = files.map(extractWidgetMetadata).filter(Boolean);
    const metadata = {
      title: "Vokdn's Widgets",
      description: "Premium media widgets by vokdn",
      icon: 'https://raw.githubusercontent.com/Corpse00/ForwardWidgets/master/icon.png',
      widgets: widgetIndex
    }

    console.log(`Successfully extracted metadata from ${widgetIndex.length} widgets`);

    // Write index file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(metadata, null, 2));

    console.log(`Widget index written to ${OUTPUT_FILE}`);
  } finally {
    // Clean up temp directory
    if (fs.existsSync(TEMP_DIR)) {
      fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    }
  }
}

main().catch(error => {
  console.error('Error generating widget index:', error);
  process.exit(1);
});