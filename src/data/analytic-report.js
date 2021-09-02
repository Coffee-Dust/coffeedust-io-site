class AnalyticReport {

  validEvents = [
    "pageLoad"
  ]

  async fetchIpInfo() {
    return fetch("https://ipapi.co/json/").then(resp => resp.json())
      .then(ipData => {
        const { ip, city, region, country, country_name } = ipData
        this.ipData = { ip, city, region, country, countryName: country_name }
      })
  }

  constructor(eventType, details) {
    this.eventType = eventType
    this.eventDetails = details
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

  toJSON() {
    return { eventType: this.eventType, eventDetails: this.eventDetails, ...this.ipData }
  }

}

export default AnalyticReport