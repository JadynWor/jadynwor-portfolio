import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
   
  ];
};

export default function Index() {
  return (
    <div className="text-center mt-20 text-2xl text-gray-500">
      Welcome to my portfolio!
    </div>
  );
}
