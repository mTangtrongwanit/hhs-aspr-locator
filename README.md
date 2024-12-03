## Note on "Minification"

Please note that during initial testing with Robert Blischke from the EMCS team, a few false positives vunerabilities were found when including the node_modules for this application. Those issues were found to exist within React itself and should not effect the final application. Running scans without including those modules produced no issues.


## Deployment Guide

### Prerequisites

Ensure you have the following installed:
- Node.js (version 18.7.1)
- npm (version 9.6.7)

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/your-repo/hhs-aspr-locator.git
  cd hhs-aspr-locator
  ```

2. Install the dependencies:
  ```sh
  npm install
  ```


### Building for Production and Deploying

To create a production build, run:
```sh
npm run build
```
The output will be in the `dist` directory.


2. Deploy the contents of the `dist` directory to your web server or hosting service.

### Additional Notes

- Ensure your web server is configured to serve the `index.html` file for all routes, as this is a single-page application.
- For more details on deployment, refer to the Vite documentation: [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

 


## Application Information

| Section                       | Details                                                                 |
|-------------------------------|-------------------------------------------------------------------------|
| **Application/Code Name**     | HHS ASPR Treatment Finder 2.0                                                         |
| **Version**                   | 2.0                                                                   |
| **Application/Code Description** | A locator application for HHS ASPR using React, TypeScript, and Vite.   |
| **Application/Code Dependencies** | React, TypeScript, Vite, @vitejs/plugin-react, eslint-plugin-react, @arcgis/core, @esri/calcite-components-react, @fontsource/open-sans, @radix-ui/react-accordion, @radix-ui/react-checkbox, @radix-ui/react-dropdown-menu, @radix-ui/react-icons, @radix-ui/react-popover, @radix-ui/react-select, @radix-ui/react-tooltip, @react-hook/resize-observer, @trussworks/react-uswds, echarts, i18next, react, react-dom, react-i18next, react-router-dom, styled-components |

## Change Log

| Date       | Description of Change                                      | Remediation Description                                      |
|------------|-------------------------------------------------------------|--------------------------------------------------------------|
| 2024-12-5 | Initial release                                             | N/A                                                          |
