import './product.scss'
import Single from '../../components/single/Single.tsx'
import { singleProduct } from '../../mocks/data.ts'

const Product = () => {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  )
}

export default Product
