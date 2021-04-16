import { useGoogleLogin } from 'react-google-login'
import { RiLoginCircleFill } from 'react-icons/ri'

// refresh token
import { refreshTokenSetup } from './refreshToken'

import styles from './LoginButton.module.scss'

const clientId = process.env.REACT_APP_LOVE_ELETTER_GA_CLIENT_ID

function LoginButton ({ onAuthenticatedSuccessfully }) {
  const onSuccess = (res) => {
    refreshTokenSetup(res)
    onAuthenticatedSuccessfully(res.profileObj)
  }

  const onFailure = (res) => {
    console.log('Login failed: res:', res)
    alert(
      'Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz'
    )
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline'
  })

  return (
    <button onClick={signIn} className={styles.loginButton}>
      <RiLoginCircleFill className={styles.icon} />
      <span>Sign in with Google</span>
    </button>
  )
}

export default LoginButton
