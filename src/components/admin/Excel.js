import * as api from "../../services/Endpoints";
import FileDownload from "js-file-download";

const Excel = () => {
  const exportExcel = () => {
    api.exportExcel().then((response) => {
      console.log(response);
      FileDownload(response.data, "leads.xlsx");
    });
  };

  return (
    <button className="btn mt-4" onClick={() => exportExcel()}>
      Exportar dados em formato excel
    </button>
  );
};

export default Excel;
