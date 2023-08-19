import { Link, useLocation } from 'react-router-dom'

function BreadCrumbs() {
  const location = useLocation()
  const currentLink = []
  const crumbs = location.pathname.split('/')
    .filter((crumb) => crumb != '')
    .map((crumb) => {
        currentLink.push(`/${crumb}`)
        return(
            <div className='crumb' key={crumb}>
                <Link to={currentLink.join('')}>{crumb}</Link>
            </div>
        )
    })
  console.log(crumbs);
  return (
    <div className='breadcrumbs'>{crumbs}</div>
  )
}

export default BreadCrumbs