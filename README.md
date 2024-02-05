# React Pipeline Builder

Welcome to the React Pipeline Builder project! This project is aimed at providing a drag-and-drop interface for creating pipelines consisting of nodes and pipes. 

## Features

- Drag-and-drop interface for creating pipelines.
- Each node in the pipeline consists of:
  - `num_inputs`: The exact number of input pipes that the node can receive.
  - `num_outputs`: The exact number of output pipes that the node can send.
  - `config`: A JSON field that can contain any random data to configure the node.
- Predefined nodes with preset fields can be dragged and dropped into the editor.
- Users can create custom nodes within the editor and configure the three fields: `num_inputs`, `num_outputs`, and `config`.
- Connections between nodes are made by connecting inputs with outputs. Inputs cannot be connected to inputs, and outputs cannot be connected to outputs.

## Technologies Used

- React: The project is built using React.js for building user interfaces.
- HTML/CSS: For structuring and styling the interface.
- JavaScript: To add interactivity and functionality to the components.
- React DnD (Drag and Drop): Used for implementing the drag-and-drop functionality.

## Getting Started

To get started with the React Pipeline Builder, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the development server with `npm start`.
5. Access the application in your browser at `http://localhost:3000`.

## Usage

Once the application is running, you can:

- Drag predefined nodes from the list and drop them into the editor.
- Configure the `num_inputs`, `num_outputs`, and `config` fields for custom nodes.
- Create connections between nodes by dragging from an output to an input.
- Save or export the pipeline configuration if needed.

## Contribution

Contributions to the React Pipeline Builder project are welcome! Feel free to open issues for feature requests or bug reports. Pull requests are also encouraged.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
