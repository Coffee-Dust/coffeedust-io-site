import AnalyticReport from "./analytic-report.js"

class AnalyticsReporter {
  
  static config = {
    serverURL: "https://analytics.coffeedust.io/report",
    testServerURL: "http://localhost:420/report"
  }

  static async reportEvent(eventType, details) {
    const report = new AnalyticReport({eventType, details})
    await report.fetchIpInfo()
    return this.submitReport(report)
  }

  static async submitReport(report) {
    const postConfig = {
      method: "POST",
      headers: { 
      "Content-Type": "application/json", 
      "Accept": "application/json"
      },
      body: JSON.stringify(report.toJSON())
    }

    return fetch(this.config.testServerURL, postConfig).then(resp=> resp.json()).catch(error=> console.error("An error occured while submitting data to analytics.coffeedust.io", error))
  }

}

export default AnalyticsReporter