import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <main>
      <h1>Get started with Bootstrap</h1>
      <p className="fs-5 col-md-8">Quickly and easily get started with Bootstrap's compiled, production-ready files with this barebones example featuring some basic HTML and helpful links. Download all our examples to get started.</p>
      <div className="mb-5">
        <a href="/docs/5.2/examples/" className="btn btn-primary btn-lg px-4">Download examples</a>
      </div>
      <hr className="col-3 col-md-2 mb-5" />
      <div className="row g-5">
        <div className="col-md-6">
          <h2>Starter projects</h2>
          <p>Ready to beyond the starter template? Check out these open source projects that you can quickly duplicate to a new GitHub repository.</p>
          <ul className="icon-list ps-0">
            <li className="d-flex align-items-start mb-1"><a href="https://github.com/twbs/bootstrap-npm-starter" rel="noopener" target="_blank">Bootstrap npm starter</a></li>
            <li className="text-muted d-flex align-items-start mb-1">Bootstrap Parcel starter (coming soon!)</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Guides</h2>
          <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
          <ul className="icon-list ps-0">
            <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/introduction/">Bootstrap quick start guide</a></li>
            <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/webpack/">Bootstrap Webpack guide</a></li>
            <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/parcel/">Bootstrap Parcel guide</a></li>
            <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/vite/">Bootstrap Vite guide</a></li>
            <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/contribute/">Contributing to Bootstrap</a></li>
          </ul>
        </div>
      </div>
    </main>
    )
  }
}

export default Home