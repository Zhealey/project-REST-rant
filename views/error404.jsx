const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
        <div>
          <img src="/images/cat.jpg" alt="404 Cat" />
          <div>
            Photo by <a href="https://www.pixar.com/sadDFaswdQ">Unsplash</a>
          </div>
        </div>
      </main>
      </Def>
    )
}
  
module.exports = error404
