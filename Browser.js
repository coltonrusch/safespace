import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Keyboard,
    Image,
    TouchableHighlight,
    ActivityIndicator
} from "react-native";
import {WebView} from "react-native-webview";

import * as constants from "./CONSTANTS"

class Browser extends Component {
    state = {
        editedHTML: "",
        editedHTMLURL: "",
        currentURLFiltered: false,
    };

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.browserTitleContainer}>
                    <Text style={styles.browserTitle}>
                        PreCursor Browser
                    </Text>
                </View>             

                    <WebView
                        ref={this.setBrowserRef}
                        originWhitelist={['*']}
                        source={{html: this.state.editedHTML}}
                        onLoad={this.onBrowserLoad}
                    />
                </View>
        );
    }


//#####################################################################


//                FILTERING METHODS


//#####################################################################

    // called when the webview is first loaded
    componentDidMount(){

        let url = "https://en.wikipedia.org/wiki/Cheese";

        this.getHTML(url)
            .then(html => this.replaceText(html, url))
            .catch((err) => console.error("Error with filtering:" + err));
    };

    getHTML = async (url) => {
        const response = await fetch(url);   // fetch page    
        return await response.text();  // get response text
    }

    replaceText = (html, url) => {
        constants.wordsToBlock.forEach(element => {;
            html = this.replaceAllNoCase(html, element, "😀😀😀😀😀😀😀😀")
        });

        this.setState((prevState) => ({
            currentURLFiltered: true, 
            editedHTMLURL: url, 
            editedHTML: html}))
        }

    replaceAllNoCase = (word ,strReplace, strWith) => {
        // See http://stackoverflow.com/a/3561711/556609
        var esc = strReplace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        var reg = new RegExp(esc, 'ig');
        if (word == null) return "";
        else return word.replace(reg, strWith);
    };
}

const styles = StyleSheet.create({
    browser: {
        flex: 1
    },
    root: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    disabled: {
        opacity: 0.3
    },
    browserTitleContainer: {
      height: 30,
      justifyContent: 'center',
      paddingLeft: 8
    },
    browserTitle: {
        fontWeight: 'bold'
    },
    browserBar: {
        height: 40,
        backgroundColor: 'steelblue',
        flexDirection: 'row',
        alignItems: 'center'
    },
    browserAddressBar: {
        height: 40,
        backgroundColor: 'white',
        borderRadius: 3,
        flex: 1,
        borderWidth: 0,
        marginRight: 8,
        paddingLeft: 8
    },
    browserContainer: {
        flex: 2
    }
});

export default Browser;
