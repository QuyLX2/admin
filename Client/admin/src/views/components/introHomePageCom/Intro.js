import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default class Intro extends Component {
    render() {
        return (
            <Row style={{margin: "50px 0"}}>
                <Col span={8}>
                    <Title level={3}>h3. Ant Design</Title>
                    <>
                        <Paragraph ellipsis>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                            Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                            a design language for background applications, is refined by Ant UED Team. Ant Design, a
                            design language for background applications, is refined by Ant UED Team. Ant Design, a design
                            language for background applications, is refined by Ant UED Team. Ant Design, a design
                            language for background applications, is refined by Ant UED Team.
                        </Paragraph>

                        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                            Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                            a design language for background applications, is refined by Ant UED Team. Ant Design, a
                            design language for background applications, is refined by Ant UED Team. Ant Design, a design
                            language for background applications, is refined by Ant UED Team. Ant Design, a design
                            language for background applications, is refined by Ant UED Team.
                        </Paragraph>
                    </>
                </Col>
                <Col span={8}>
                    <Title level={3}>h3. Ant Design</Title>
                    <>
                        <Paragraph ellipsis>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                            Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                            a design language for background applications, is refined by Ant UED Team. Ant Design, a
                            design language for background applications, is refined by Ant UED Team. Ant Design, a design
                            language for background applications, is refined by Ant UED Team. Ant Design, a design
                            language for background applications, is refined by Ant UED Team.
                        </Paragraph>

                        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                            Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                            a design language for background applications, is refined by Ant UED Team. Ant Design, a
                            design language for background applications, is refined by Ant UED Team. Ant Design, a design
                            language for background applications, is refined by Ant UED Team. Ant Design, a design
                            language for background applications, is refined by Ant UED Team.
                        </Paragraph>
                    </>
                </Col>
                <Col span={8}>
                    <Title level={3}>h3. Ant Design</Title>
                    <>
                        <Paragraph ellipsis>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                            Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                            a design language for background applications, is refined by Ant UED Team. Ant Design, a
                            design language for background applications, is refined by Ant UED Team. Ant Design, a design
                            language for background applications, is refined by Ant UED Team. Ant Design, a design
                            language for background applications, is refined by Ant UED Team.
                        </Paragraph>

                        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                            Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                            a design language for background applications, is refined by Ant UED Team. Ant Design, a
                            design language for background applications, is refined by Ant UED Team. Ant Design, a design
                            language for background applications, is refined by Ant UED Team. Ant Design, a design
                            language for background applications, is refined by Ant UED Team.
                        </Paragraph>
                    </>
                </Col>
            </Row>
        )
    }
}
