import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';




class HomeFooter extends Component {



    render() {

        return (
            <div className='home-footer'>
                <p>&copy; 2022 AnhBT12
                    <a target='_blank' href='https://www.youtube.com/watch?v=j6iuGkKEqek&ab_channel=B%E1%BB%87nhvi%E1%BB%87n%C4%90KQTVinmec'>
                        More information
                    </a>
                </p>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
