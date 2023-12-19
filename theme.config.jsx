const YEAR = new Date().getFullYear()
import {
  FaHandshake
} from 'react-icons/fa'
import {
  BsChatSquareDotsFill

} from 'react-icons/bs'
import CustomHead from './components/custom-head'


export default {

  head: CustomHead,

  footer: (
    <small style={{ fontSize: '14px',display:'block',marginTop:'6rem',display:'flex' }}>
      <span><time>{YEAR}</time> © Cappy Ishihara</span>

        {/* <div className='footicon'>
          <a href="https://www.linkedin.com/in/ninad-vyas-b767491a3/" className='footiconin'>
           <a className='icon1'>
            <FaHandshake
              style={{
                color: '#7g7g7f',
                fontSize: '18.5px',
                width: '30px',
                marginTop:'3px'
              }}
            />
          </a>Stay Connected!</a>


         
        </div> */}

      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ), 
  components: {
    logo: (
      <>
        <span>Cappy Ishihara</span>
      </>
    ),
    titleSuffix: "Cappy Ishihara ",
  },
  darkMode: false
}
