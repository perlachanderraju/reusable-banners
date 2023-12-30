// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {source} = props
  const {headerText, description, className} = source
  return (
    <li className={className}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button">Show More</button>
      </div>
    </li>
  )
}
export default BannerCardItem
