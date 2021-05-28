import React, { useState } from "react";
import Terminal from "./Components/Terminal/Terminal";
import FolderIcon from "./Components/Icons/FolderIcon";
import WindowsFileEx from "./Components/WindowsFileExplorer/WindowsFileEx";
import WindowsFooter from "./Components/WindowsFooter/WindowsFooter";
import StartWindow from "./Components/StartWindow/StartWindow";
import ExerciseTracker from "./Components/ExerciseTracker/ExerciseTracker";
//import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const queryClient = new QueryClient();

const App = () => {
    // LOADING SCREEN
    const [isLoading, setIsLoading] = useState(true);
    // Window File Explorer
    const [displayWfe, setDisplayWfe] = useState(false);
    // Terminal
    const [terminalDisplay, setTerminalDisplay] = useState(false);
    // Windows start window (in the footer)
    const [startWindow, setStartWindow] = useState(false);

    const [exerciseTracker, setExerciseTracker] = useState(false);

    const onStart = (e) => {
        let elems = document.getElementsByClassName("react-draggable");
        for (let i = 0; i < elems.length; i++) {
            elems[i].style.zIndex = 1;
            e.currentTarget.style.zIndex = 2;
        }
    };

    if (isLoading) {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return (
            <div className="loading-screen">
                <p className="loading">Loading System...</p>;
                <div className="loading-bar"></div>
            </div>
        );
    }

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <div className="main">
                    <FolderIcon setDisplayWfe={setDisplayWfe} />
                    {terminalDisplay ? (
                        <Terminal
                            terminalDisplay={terminalDisplay}
                            setTerminalDisplay={setTerminalDisplay}
                            onStart={onStart}
                            exerciseTracker={exerciseTracker}
                            setExerciseTracker={setExerciseTracker}
                        />
                    ) : null}
                    {displayWfe ? (
                        <WindowsFileEx
                            setDisplayWfe={setDisplayWfe}
                            displayWfe={displayWfe}
                            setTerminalDisplay={setTerminalDisplay}
                            onStart={onStart}
                        />
                    ) : null}
                    {exerciseTracker ? (
                        <ExerciseTracker
                            onStart={onStart}
                            exerciseTracker={exerciseTracker}
                            setExerciseTracker={setExerciseTracker}
                        />
                    ) : null}
                    <WindowsFooter setStartWindow={setStartWindow} />
                    <StartWindow startWindow={startWindow} />
                </div>
            </div>
        </QueryClientProvider>
    );
};

export default App;
