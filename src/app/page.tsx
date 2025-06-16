import {
  MdAccountBalanceWallet,
  MdMapsHomeWork,
  MdTaxiAlert,
  MdToday,
} from "react-icons/md";

import Header from "@/components/Header";
import Card from "@/components/Card";

export default function DashboardPage() {
  return (
    <div className="flex-1">
      <Header />
      <div className="p-6 md:p-2 md:pt-6">
        <div className="flex flex-col lg:flex-row gap-4 pb-6 justify-center">
          <Card className="w-full lg:w-1/3">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center justify-between border-b border-slate-700 px-6 pt-4 pb-3">
                <div>
                  <p className="text-sm font-semibold uppercase text-gray-400">
                    Perolehan Pajak PBB
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-500/20">
                  <MdMapsHomeWork className="h-6 w-6 text-cyan-500" />
                </div>
              </div>

              <div className="border-b border-slate-700 px-6 py-4">
                <h3 className="text-3xl font-bold text-white">Rp. 400.000</h3>
              </div>

              <div className="px-6 py-3 text-right">
                <p className="text-xs text-gray-500">Last Update 06-07-2023</p>
              </div>
            </div>
          </Card>
          <Card className="w-full lg:w-1/3">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center justify-between border-b border-slate-700 px-6 pt-4 pb-3">
                <div>
                  <p className="text-sm font-semibold uppercase text-gray-400">
                    Perolehan Pajak PBB
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-500/20">
                  <MdMapsHomeWork className="h-6 w-6 text-cyan-500" />
                </div>
              </div>

              <div className="border-b border-slate-700 px-6 py-4">
                <h3 className="text-3xl font-bold text-white">Rp. 400.000</h3>
              </div>

              <div className="px-6 py-3 text-right">
                <p className="text-xs text-gray-500">Last Update 06-07-2023</p>
              </div>
            </div>
          </Card>
          <Card className="w-full lg:w-1/3">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center justify-between border-b border-slate-700 px-6 pt-4 pb-3">
                <div>
                  <p className="text-sm font-semibold uppercase text-gray-400">
                    Perolehan Pajak PBB
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-500/20">
                  <MdMapsHomeWork className="h-6 w-6 text-cyan-500" />
                </div>
              </div>

              <div className="border-b border-slate-700 px-6 py-4">
                <h3 className="text-3xl font-bold text-white">Rp. 400.000</h3>
              </div>

              <div className="px-6 py-3 text-right">
                <p className="text-xs text-gray-500">Last Update 06-07-2023</p>
              </div>
            </div>
          </Card>
          <Card className="w-full lg:w-1/3">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center justify-between border-b border-slate-700 px-6 pt-4 pb-3">
                <div>
                  <p className="text-sm font-semibold uppercase text-gray-400">
                    Perolehan Pajak PBB
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-500/20">
                  <MdMapsHomeWork className="h-6 w-6 text-cyan-500" />
                </div>
              </div>

              <div className="border-b border-slate-700 px-6 py-4">
                <h3 className="text-3xl font-bold text-white">Rp. 400.000</h3>
              </div>

              <div className="px-6 py-3 text-right">
                <p className="text-xs text-gray-500">Last Update 06-07-2023</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
