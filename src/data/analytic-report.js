class AnalyticReport {

  validEvents = [
    "pageLoad"
  ]

  constructor(data) {
    this.eventType = data.eventType
    this.eventDetails = data.details
  }

  get eventType() {
    return this._eventType
  }

  set eventType(event) {
    if (this.validEvents.includes(event)) {
      this._eventType = event
    } else {
      throw new Error("<InvalidAnalyticsReportEventType> unknown or invalid eventType was assigned to a report")
    }
  }

}

export default AnalyticReport