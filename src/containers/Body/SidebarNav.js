import { connect } from 'react-redux';

import changeNav from './../../actions/navigation';
import Sidebar from './../../components/Body/Sidebar';

const getHash = () => {
        
    let hash = window.location.hash.split('/'),
        hashRoute = hash[1];

    return hashRoute || 'clock';
}

const mapStateToProps = state => {
    return {
        route: state.route,
        hashRoute : getHash()
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNavClick: (route, liElements) => {
            let key;

            for( key in liElements ) {
            
                if( !isNaN( key ) ) {

                    if( liElements[ key ].getAttribute('data-route') === route ) {
                        liElements[ key ].setAttribute( 'class', 'active' );   
                    } else {
                        liElements[ key ].setAttribute( 'class', '' );
                    }
                }
            }

            dispatch( changeNav( route ) );
        }
    }
}

const SidebarNav = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)

export default SidebarNav;