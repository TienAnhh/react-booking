import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';




class About extends Component {



    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông về Booking Care
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%"
                            height="400px"
                            src="https://www.youtube.com/embed/j6iuGkKEqek"
                            title="Khám sức khỏe định kỳ có ý nghĩa như thế nào trong việc dự phòng bệnh tật?"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                            Thực tế, phòng bệnh bao giờ cũng hiệu quả, nhẹ nhàng hơn chữa bệnh, không ai có thể biết bên trong cơ thể mình có tiềm ẩn nguy cơ mắc bệnh gì. Có những bệnh lý nghiêm trọng đôi khi phát hiện tình cờ khi siêu âm, chụp phim X-quang,... khi khám sức khỏe mặc dù không hề có triệu chứng gì. Nếu các bệnh lý nghiêm trọng không được phát hiện sớm, khi phát hiện đã ở mức độ nặng thì việc điều trị sẽ vô cùng khó khăn, tốn kém và ảnh hưởng nghiêm trọng đến chất lượng cuộc sống.
                        </p>
                    </div>
                </div>


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

export default connect(mapStateToProps, mapDispatchToProps)(About);
