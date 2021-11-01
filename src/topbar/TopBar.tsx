import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Langs } from '../App';
import ToolBarMobile from './ToolBarMobile';
import ToolBar from './ToolBar';

interface TopBarProps {
    onLangChange: (lang: Langs) => void;
    lang: Langs;
}

export default function TopBar({ onLangChange, lang }: TopBarProps) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <ToolBarMobile onLangChange={onLangChange} lang={lang} />
                <ToolBar onLangChange={onLangChange} lang={lang} />
            </AppBar>
        </Box>
    );
}
