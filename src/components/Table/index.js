const Contact = ({
  item,
}) => {
  return (
    <div className="flex items-center">
      { !!item.pic ?
        <img src={item.pic} alt="mini avatar" className="w-[22px] h-[22px]" /> :
        <div className="text-center">
          <p className={`rounded-full text-white w-[22px] h-[22px] ${item.background}`}>{item.name.charAt(0).toUpperCase()}</p>
        </div>
      }
      <p className="text-base text-sm leading-5 ml-2">{item.name}</p>
    </div>
  )
}

const Status = ({ status }) => {
  return (
    <div className={`max-w-[100px] rounded ${status.background}`}>
      <p className="text-base text-sm leading-5 pl-3">{status.name}</p>
    </div>
  )
}

const TableBody = ({
  data,
}) => {
  if (data.length < 1) return
  return (
    <tbody>
      {data.map((item, index) => {
        return (
          <tr key={`item-${index}`} className="bg-white rounded shadow-[2px_2px_4px_rgba(0,0,0,0.05)]">
            <td className="py-3.5 px-4 rounded-l">
              <img src={item.mlogo} alt="Client logo" className="w-11 h-11 rounded" />
            </td>
            <td>
              <p className="font-bold text-base leading-5">{item.approvalName}</p>
            </td>
            <td>
              <Contact item={item.client} />
            </td>
            <td>
              <Contact item={item.owner} />
            </td>
            <td>
              <p className="text-sm font-normal leading-5">{item.date}</p>
            </td>
            <td className="rounded-r pr-[50px]">
              <Status status={item.status} />
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}

const Table = ({
  data,
}) => {
  return (
    <table className="table-auto border-separate border-spacing-y-3.5 w-full">
      <thead>
        <tr className="bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.05)]">
          <th className="py-3.5 px-4 rounded-l font-normal text-sm leading-5">Clients</th>
          <th className="font-normal text-sm leading-5">Approval name</th>
          <th className="font-normal text-sm leading-5">Client contact</th>
          <th className="font-normal text-sm leading-5">Owner</th>
          <th className="font-normal text-sm leading-5">Date issued</th>
          <th className="rounded-r font-normal text-sm leading-5">Status</th>
        </tr>
      </thead>
      <TableBody data={data} />
    </table>
  )
}

export default Table
