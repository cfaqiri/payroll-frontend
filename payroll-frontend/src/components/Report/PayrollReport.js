import { Fragment, useContext, useState } from "react";
import AuthContext from "../../contexts/auth-context";

const PayrollReport = () => {
  const authCtx = useContext(AuthContext);

  const [reportData, setReportData] = useState();

  async function fetchPayrollDataHandler() {
    const response = await fetch("http://127.0.0.1:8000/retrieve/", {
      method: "GET",
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: "Token " + authCtx.token,
      },
    });

    const report = await response.json();
    const reports = report.payrollReport.employeeReports.map(
      (employeeReport) => {
        return (
          <tr>
            <td>{employeeReport.employeeId}</td>
            <td>{employeeReport.payPeriod.startDate}</td>
            <td>{employeeReport.payPeriod.endDate}</td>
            <td>{employeeReport.amountPaid}</td>
          </tr>
        );
      }
    );

    setReportData(
      <table>
        <tr>
          <th>Employee Id</th>
          <th>Period Start</th>
          <th>Period End</th>
          <th>Amount Paid</th>
        </tr>
        {reports}
      </table>
    );
  }

  return (
    <Fragment>
      <section>
        <button onClick={fetchPayrollDataHandler}>Get Payroll Data</button>
      </section>
      <section>{reportData}</section>
    </Fragment>
  );
};

export default PayrollReport;
