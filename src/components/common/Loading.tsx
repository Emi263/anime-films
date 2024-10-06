import { Spin } from 'antd'

function Loading() {
  return <section style={{
    height: 500,
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
  }}>
    Loading <Spin size="large" />
  </section>
}

export default Loading