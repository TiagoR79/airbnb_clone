NOTES:

  1. Update node.js using nvm
      - install nvm:
        - sudo apt update
        - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
        - source ~/.bashrc
        - nvm --version
        - nvm ls-remote - lists node versions
        - nvm install [version]
  
  2. Create Next.js app:
      - npx create-next-app
      
  3. Files on Public/ are automatically served statically by Next.js ->  ex. http://localhost:3000/img/1.jpg

  4. Setup a temporary local database for the listing info - "/houses.js" :
          
          export default [
                {
                  picture: '/images/1.jpeg',
                  type: 'Entire house',
                  town: 'New York',
                  title: 'Beautiful flat in New York!'
                },
                {
                  picture: '/images/2.jpeg',
                  type: 'Entire house',
                  town: 'Amsterdam',
                  title: 'A flat in Amsterdam with a great view'
                }
          ]
          
  5. import and map the JSON int the /pages/index.js - pass house as prop

          import houses from '../houses.js'
          
          ...
          
          
          <div className="houses">
              {houses.map((house, index) => {
                  return <House key={index} {...house} />
              })}
          </div>
  
  6. Create the House component - accept the house as prop


          export default function House(props) {

              console.log(props)

              return(
                <div>
                  <img src={props.picture} width="100%" alt="House picture" />
                  <p>
                    {props.type} - {props.town}
                  </p>
                  <p>{props.title}</p>
                </div>
              )
           }
