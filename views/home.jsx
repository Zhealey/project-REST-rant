const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/fruit-cup.jpg" alt="Fruit Cup"></img>
                <div>
                  Photo by <a href="AUTHOR_LINK">Brend Godniez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    );
  }
  
module.exports = home;