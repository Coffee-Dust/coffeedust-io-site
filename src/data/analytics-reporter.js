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
  
}