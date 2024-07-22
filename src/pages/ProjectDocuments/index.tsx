import { Space, Flex } from "antd";
import {
  FileManagerComponent,
  Inject,
  NavigationPane,
  DetailsView,
  Toolbar,
} from "@syncfusion/ej2-react-filemanager";
import styles from "./styles.module.css";

const ProjectDocuments = () => {
  const hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";

  return (
    <Space direction="vertical" size="middle" className={styles.main}>
      <Flex align="center" gap={8}>
        <p className={styles.heading}>Project:</p>
        <p className={styles.leading}>Project Name [Project ID]</p>
      </Flex>

      <FileManagerComponent
        height="600px"
        ajaxSettings={{
          url: hostUrl + "api/FileManager/FileOperations",
          getImageUrl: hostUrl + "api/FileManager/GetImage",
          uploadUrl: hostUrl + "api/FileManager/Upload",
          downloadUrl: hostUrl + "api/FileManager/Download",
        }}
        toolbarSettings={{
          items: [
            "NewFolder",
            "SortBy",
            "Cut",
            "Copy",
            "Paste",
            "Delete",
            "Refresh",
            "Download",
            "Rename",
            "Selection",
            "View",
            "Details",
          ],
        }}
        contextMenuSettings={{
          layout: [
            "SortBy",
            "View",
            "Refresh",
            "|",
            "Paste",
            "|",
            "NewFolder",
            "|",
            "Details",
            "|",
            "SelectAll",
          ],
        }}
        view={"Details"}
      >
        <Inject services={[NavigationPane, DetailsView, Toolbar]} />
      </FileManagerComponent>
    </Space>
  );
};

export default ProjectDocuments;
