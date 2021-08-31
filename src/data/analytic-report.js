class AnalyticReport {

  validEvents = [
    "pageLoad"
  ]

  constructor(data) {
    this.eventType = data.eventType
    this.eventDetails = data.details
  }

}

export default AnalyticReport