import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";


import { Row, Col, Button, Container, Input } from "reactstrap";


const languageMap = [
    {
        label: "English", dir: "ltr", active: true
    },
    {
        label: "اردو", dir: "rtl", active: false
    },
];

export const LanguageSelector = () => {
    const selected = localStorage.getItem("i18nextLng") || "en";
    const { t } = useTranslation();
    const [menuAnchor, setMenuAnchor] = React.useState(null);
    React.useEffect(() => {
        document.body.dir = languageMap[selected].dir;
    }, [menuAnchor, selected]);
    return (
        <>
            <Row>
                <Col>
                    <Input type="search">
                        {languageMap !== null && languageMap !== undefined && languageMap.map((lang, index) => {
                            return (
                                <option key={lang} onSelect={() => {
                                    i18next.changeLanguage(lang);
                                    setMenuAnchor(null);
                                }}>{lang.label}</option>
                            )
                        })}
                    </Input>
                </Col>
            </Row>
        </>

    )
}