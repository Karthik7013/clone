import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { Box, IconButton, ToggleButton, ToggleButtonGroup, useTheme } from "@mui/material";
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
mermaid.initialize({
    theme: "dark",
    securityLevel: "loose",
    fontFamily: "Fira Code"
});

interface MermaidProps {
    chart: string;
    className?: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart, className }) => {
    const muiTheme = useTheme();
    const [codeMode, setCodeMode] = useState<'code' | 'diagram'>('diagram');

    const handleCodeMode = (
        event: React.MouseEvent<HTMLElement>,
        value: 'code' | 'diagram' | null
    ) => {
        if (event) {
            // do nothing
        }
        if (value) setCodeMode(value);
    };
    const mode = muiTheme.palette.mode;
    const containerRef = useRef<HTMLDivElement>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!containerRef.current || !chart.trim()) return;

        const renderMermaid = async (): Promise<void> => {
            try {
                setError(null);

                // Clear previous content
                containerRef.current!.innerHTML = "";

                // Generate unique ID for the SVG
                const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;

                // Create a temporary element for mermaid to process
                const tempElement = document.createElement("div");
                tempElement.innerHTML = chart;
                tempElement.className = "mermaid";

                // Render the mermaid chart
                const { svg, bindFunctions } = await mermaid.render(id, chart);

                // Insert the SVG
                containerRef.current!.innerHTML = svg;

                // Bind functions if they exist
                if (bindFunctions) {
                    bindFunctions(containerRef.current!);
                }

            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
                console.error("Error rendering mermaid chart:", errorMessage);
                setError(errorMessage);
                containerRef.current!.innerHTML = `
          <div style="color: red; padding: 10px; border: 1px solid red; border-radius: 4px;">
            <strong>Mermaid Error:</strong> ${errorMessage}
          </div>
        `;
            }
        };

        renderMermaid();
    }, [chart, codeMode]);

    // Show loading or error state
    if (error) {
        return (
            <div className={className}>
                <div style={{ color: "red", padding: "10px" }}>
                    Failed to render diagram: {error}
                </div>
            </div>
        );
    }

    if (!chart.trim()) {
        return (
            <div className={className}>
                <div style={{ color: "#666", padding: "10px", fontStyle: "italic" }}>
                    No diagram code provided
                </div>
            </div>
        );
    }


    return <Box sx={{
        borderRadius: '16px',
        overflow: 'clip',
    }}>
        <Box
            sx={{
                bgcolor: mode === 'dark' ? muiTheme.palette.grey[900] : muiTheme.palette.grey[300],
                position: 'sticky',
                top: 0,
                justifyContent: 'space-between',
                display: 'flex',
                padding: '0.5em 1em',
            }}>
            <ToggleButtonGroup
                value={codeMode}
                exclusive
                size="small"
                onChange={handleCodeMode}
            >
                <ToggleButton value="code" size="small">
                    <CodeRoundedIcon fontSize="inherit" />
                </ToggleButton>
                <ToggleButton value="diagram" size="small">
                    <CategoryRoundedIcon fontSize="inherit" />
                </ToggleButton>
            </ToggleButtonGroup>

            <Box>
                <IconButton size="small" children={<OpenInFullRoundedIcon fontSize="inherit" />} />
            </Box>
        </Box>
        <div style={{
            width: '100%',
            backgroundColor: muiTheme.palette.divider,
            padding: 20,
            overflow: "auto"
        }}
        >


            {codeMode === 'code' ? chart : <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 20,
                    overflow: "auto"
                }}
                ref={containerRef}
                className={className}
            />}
        </div>
    </Box >
};

export default Mermaid;