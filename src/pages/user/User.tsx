import './user.scss'
import Single from '../../components/single/Single.tsx'
import { singleUser } from '../../mocks/data.ts'

const User = () => {
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  )
}

export default User
