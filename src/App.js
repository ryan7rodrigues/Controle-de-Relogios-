import { useState } from "react";

const initialData = [
  { codigo: "25867", marca: "LINCE" },
  { codigo: "25868", marca: "LINCE" },
  { codigo: "25868", marca: "LINCE" },
  { codigo: "25869", marca: "LINCE" },
  { codigo: "25870", marca: "LINCE" },
  { codigo: "25871", marca: "LINCE" },
  { codigo: "25872", marca: "LINCE" },
  { codigo: "25873", marca: "LINCE" },
  { codigo: "25874", marca: "LINCE" },
  { codigo: "25875", marca: "LINCE" },
  { codigo: "25876", marca: "LINCE" },
  { codigo: "25877", marca: "LINCE" },
  { codigo: "25878", marca: "LINCE" },
  { codigo: "25879", marca: "LINCE" },
  { codigo: "25880", marca: "LINCE" },
  { codigo: "25881", marca: "LINCE" },
  { codigo: "25882", marca: "LINCE" },
  { codigo: "25883", marca: "LINCE" },
  { codigo: "25884", marca: "LINCE" },
  { codigo: "25885", marca: "LINCE" },
  { codigo: "25886", marca: "LINCE" },
  { codigo: "25887", marca: "LINCE" },
  { codigo: "25888", marca: "LINCE" },
  { codigo: "25889", marca: "LINCE" },
  { codigo: "25890", marca: "LINCE" },
  { codigo: "25891", marca: "LINCE" },
  { codigo: "25891", marca: "LINCE" },
  { codigo: "25892", marca: "LINCE" },
  { codigo: "25892", marca: "LINCE" },
  { codigo: "25893", marca: "LINCE" },
  { codigo: "25893", marca: "LINCE" },
  { codigo: "25894", marca: "LINCE" },
  { codigo: "25895", marca: "LINCE" },
  { codigo: "25896", marca: "XWATCH" },
  { codigo: "25897", marca: "XWATCH" },
  { codigo: "25898", marca: "XWATCH" },
  { codigo: "25899", marca: "XWATCH" },
  { codigo: "25900", marca: "XWATCH" },
  { codigo: "25901", marca: "XWATCH" },
  { codigo: "25902", marca: "XWATCH" },
  { codigo: "25903", marca: "XWATCH" },
  { codigo: "25904", marca: "XWATCH" },
  { codigo: "25905", marca: "XWATCH" },
  { codigo: "25906", marca: "ORIENT" },
  { codigo: "25907", marca: "ORIENT" },
  { codigo: "25907", marca: "ORIENT" },
  { codigo: "25908", marca: "ORIENT" },
  { codigo: "25908", marca: "ORIENT" },
  { codigo: "25909", marca: "ORIENT" },
  { codigo: "25910", marca: "ORIENT" },
  { codigo: "25911", marca: "ORIENT" },
  { codigo: "25912", marca: "ORIENT" },
  { codigo: "25912", marca: "ORIENT" },
  { codigo: "25913", marca: "ORIENT" },
  { codigo: "25914", marca: "ORIENT" },
  { codigo: "25914", marca: "ORIENT" },
  { codigo: "25914", marca: "ORIENT" },
  { codigo: "25915", marca: "ORIENT" },
  { codigo: "25916", marca: "ORIENT" },
  { codigo: "25916", marca: "ORIENT" },
  { codigo: "25917", marca: "LINCE" },
  { codigo: "25917", marca: "LINCE" },
  { codigo: "25918", marca: "LINCE" },
  { codigo: "25918", marca: "LINCE" },
  { codigo: "25920", marca: "LINCE" },
  { codigo: "25920", marca: "LINCE" },
  { codigo: "25921", marca: "LINCE" },
  { codigo: "25921", marca: "LINCE" },
  { codigo: "25922", marca: "LINCE" },
  { codigo: "25923", marca: "LINCE" },
  { codigo: "25924", marca: "LINCE" },
  { codigo: "25925", marca: "LINCE" },
  { codigo: "25926", marca: "LINCE" },
  { codigo: "25927", marca: "LINCE" },
  { codigo: "25927", marca: "LINCE" },
  { codigo: "25928", marca: "LINCE" },
  { codigo: "25929", marca: "LINCE" },
  { codigo: "25929", marca: "LINCE" },
  { codigo: "25930", marca: "LINCE" },
  { codigo: "25931", marca: "LINCE" },
  { codigo: "25932", marca: "LINCE" },
  { codigo: "25933", marca: "LINCE" },
  { codigo: "25934", marca: "LINCE" },
  { codigo: "25935", marca: "LINCE" },
  { codigo: "25936", marca: "XWATCH" },
  { codigo: "25937", marca: "XWATCH" },
  { codigo: "25938", marca: "XWATCH" },
  { codigo: "25939", marca: "ORIENT" },
  { codigo: "25940", marca: "ORIENT" },
  { codigo: "25940", marca: "ORIENT" },
  { codigo: "25941", marca: "ORIENT" },
  { codigo: "25942", marca: "ORIENT" },
  { codigo: "25942", marca: "ORIENT" },
  { codigo: "25943", marca: "ORIENT" },
  { codigo: "25943", marca: "ORIENT" },
  { codigo: "25944", marca: "ORIENT" },
  { codigo: "25945", marca: "ORIENT" },
  { codigo: "25946", marca: "ORIENT" },
  { codigo: "25947", marca: "ORIENT" },
  { codigo: "25948", marca: "ORIENT" },
  { codigo: "25949", marca: "ORIENT" },
  { codigo: "25950", marca: "ORIENT" },
  { codigo: "25950", marca: "ORIENT" },
  { codigo: "25951", marca: "ORIENT" },
  { codigo: "25952", marca: "ORIENT" },
  { codigo: "25953", marca: "ORIENT" },
  { codigo: "25954", marca: "ORIENT" },
  { codigo: "25954", marca: "ORIENT" },
  { codigo: "25955", marca: "ORIENT" },
  { codigo: "25955", marca: "ORIENT" },
  { codigo: "25956", marca: "ORIENT" },
  { codigo: "25957", marca: "ORIENT" },
  { codigo: "25958", marca: "ORIENT" },
  { codigo: "25959", marca: "ORIENT" }
];

export default function RelogiosControle() {
  const [relogios, setRelogios] = useState(
    initialData.map((item, index) => ({ id: index + 1, ...item, status: "Disponível" }))
  );

  const toggleStatus = (id) => {
    setRelogios((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, status: r.status === "Disponível" ? "Vendido" : "Disponível" } : r
      )
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Controle de Relógios</h1>
      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">#</th>
            <th className="border px-2 py-1">Código</th>
            <th className="border px-2 py-1">Marca</th>
            <th className="border px-2 py-1">Status</th>
            <th className="border px-2 py-1">Ação</th>
          </tr>
        </thead>
        <tbody>
          {relogios.map((r) => (
            <tr key={r.id} className={r.status === "Vendido" ? "bg-red-100" : ""}>
              <td className="border px-2 py-1 text-center">{r.id}</td>
              <td className="border px-2 py-1 text-center">{r.codigo}</td>
              <td className="border px-2 py-1 text-center">{r.marca}</td>
              <td className="border px-2 py-1 text-center font-semibold">
                {r.status}
              </td>
              <td className="border px-2 py-1 text-center">
                <button
                  onClick={() => toggleStatus(r.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  Marcar como {r.status === "Disponível" ? "Vendido" : "Disponível"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
