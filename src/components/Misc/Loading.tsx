import { Triangle } from "react-loader-spinner";
import './styles.css'

export function Loading() {
  return (
    <div className="loading-container">
      <Triangle
        height="80"
        width="80"
        color="#fff"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  )
}