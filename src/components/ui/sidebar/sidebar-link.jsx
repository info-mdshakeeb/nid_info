
import PropTypes from 'prop-types'

const SidebarLink = ({ icon, text }) => {

  return (
    <button
      className={`w-full font-medium flex items-center gap-2 rounded-lg py-2 px-4 mb-2 `}>
      <span>{icon}</span>
      <span className="tracking-wide ">{text}</span>
    </button>
  )
}

SidebarLink.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  text: PropTypes.string,
}
export default SidebarLink
