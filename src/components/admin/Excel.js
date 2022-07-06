import * as api from "../../services/Endpoints";
import FileDownload from "js-file-download";

const Excel = () => {
  const exportExcel = () => {
    api.exportExcel().then((response) => {
      console.log(response);
      FileDownload(response.data, "visitores.xlsx");
    });
  };

  return (
    <button className="btn m-4 btn-secondary" onClick={() => exportExcel()}>
      Exportar dados em formato excel
    </button>
  );
};

export default Excel;
