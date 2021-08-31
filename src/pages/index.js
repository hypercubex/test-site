import '../styles/index.css'

const IndexPage = () => {
  return (
    <main>
      <title>QA Engineer challenge</title>
      <div
        id='main-content'
        data-testid='main-content-container'>
        <div
          style={{ padding: 30 }}
          data-testid='main-greeting-container'>
          <div>
            {'WELCOME!'.split('').map((c, i) => (
              <div
                key={i}
                style={{
                  animation: `spiral-${i % 5} ${2 + Math.floor(Math.random() * 3)}s`
                }}
                className='greeting-message'
              >{c}</div>
            ))}
          </div>
        </div>
        <div id='main-instruction' data-testid='main-instruction'>
          <p>Greetings! Thank you for taking the time for our technical challenge,
            we hope you enjoy your time here😃</p>
          <p>This is the 2nd stage of our recruitment process</p>
          <p>We would like to ask you to create some automated tests to demonstrate your skills,
            here are the general instructions:
          </p>
          <ol>
            <li>relax, this challenge is expected to consume less than <u>8 hours</u></li>
            <li>please write tests cases and automated test scripts for this site (<b>this page</b> and the <a data-testid='main-instruction-search-link' href='/search'>Search Page</a>, mainly)</li>
            <li>automated test scripts with selenium/cypress/jest/Puppeteer or any test frameworks that we can run your tests</li>
            <li>provide some simple instructions on how can we run the tests</li>
            <li>a brief explanation/assumptions or what do the tests cover, for example, what success cases and failed cases are considered</li>
          </ol>

          <p style={{ marginTop: 20 }}>we would like to ask you to pick one of the following methods to send us your work:</p>
          <ul>
            <li>compress the source file and email to <a href='mailto:matthewlam@lcjgroup.com'>matthewlam@lcjgroup.com</a></li>
            <li style={{ marginTop: 20 }}>
              <ol>
                <li>create a private repository on github</li>
                <li>invite <a data-testid='main-instruction-collaborator' href='https://github.com/matthewlamlcj'>matthewlamlcj</a> as a collaborator once you are happy to show your work</li>
              </ol>
            </li>
            <li style={{ marginTop: 20 }}>
              <ol>
                <li>compress all your works</li>
                <li>upload it to a cloud service, e.g. Dropbox/Google Drive</li>
                <li>send us the link to get the compressed file</li>
              </ol>
            </li>
          </ul>

          <div data-testid='main-instruction-remarks'>
            <div>* for this page, a simple snapshot test should be good enough,</div>
            <div style={{ fontSize: 12 }}>of course, you are welcome to add more</div>
            <div>** It will great if you can suggest what improvements we can make</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
