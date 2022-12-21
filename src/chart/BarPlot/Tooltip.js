export const Tooltip = ({ targetData }) => (
  <div
    style={{
      border: `1px solid grey`,
      borderRadius: 4,
      padding: 10,
      backgroundColor: '#fff',
    }}
  >
    <div>{targetData.name}</div>
    <div>{targetData.value}</div>
  </div>
)
