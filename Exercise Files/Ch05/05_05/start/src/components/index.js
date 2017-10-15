import MainMenu from './ui/MainMenu'

export const Left = ({childern}) =>
<div className="page">
<MainMenu className="main-menu"/>
 {childern}
</div>

export const Right = ({childern}) =>
<div className="page">
<MainMenu className="main-menu"/>
 {childern}
</div>

export const Whoops404 = ({ location }) =>
    <div>
        <h1>Whoops, resource not found</h1>
        <p>Could not find {location.pathname}</p>
    </div>
