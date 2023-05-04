import { ReactNode } from "react";

type DropDownProps = {
  children: ReactNode;
  parentPositionAndPadding: string;
  arrowPosition: string;
};

// ==========================================
// DROPDOWN COMPONENT =======================
// ==========================================
const DropDown = ({
  children,
  parentPositionAndPadding,
  arrowPosition,
}: DropDownProps) => {
  return (
    <div
      className={`absolute cursor-auto bg-white  rounded-md shadow-appShadow-sm pt-0 w-96 ${parentPositionAndPadding}` }
      style={{zIndex:'50 !important'}}
    >
      <div
        className={`h-6 w-6 shadow-appShadow-sm bg-white absolute rotate-45 ${arrowPosition}`}
        style={{zIndex:'-1'}}

      />
      {children}
    </div>
  );
};

export default DropDown;
