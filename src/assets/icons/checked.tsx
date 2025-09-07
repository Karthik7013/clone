import { SvgIcon, SvgIconProps } from "@mui/material"

const Checked = (props: SvgIconProps) => {
    return <SvgIcon {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-check-icon lucide-square-check"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="m9 12 2 2 4-4" /></svg>
    </SvgIcon>
}
export default Checked;