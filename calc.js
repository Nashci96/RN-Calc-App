import React , { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

export default class calculator extends Component {
    static navigationOptions= ({navigation}) =>({
        title: 'Calculator',
    });

    constructor(){
        super();
        this.state = {
            nt: '',
            n1: '',
            n2: '',
            n3: '' 
        };
    }

    calc=(operator)=>{
        
        n1 = this.state.n1;
        n1 = parseFloat(n1,10);

        n2 = this.state.n2;
        n2 = parseFloat(n2,10);

        n3 = this.state.n3;
        n3 = parseFloat(n3,10);


        if (operator == "+") {
            nt = n1 + n2 + n3;
        }
        
        if (operator == "-") {
            nt = n1 - n2 - n3;
        }
        
        if (operator == "*") {
            nt = n1 * n2 * n3;
        }

        if (operator == "/") {
            nt = n1 / n2 / n3;
        }

        nt = nt.toString()
        this.setState({nt:nt});

    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.number}>
                
                    <TextInput
                    placeholder="Enter 1st Number"
                    style={styles.entry}
                    underlineColorAndroid="transparent"
                    onChangeText= {(text) => this.setState({n1:text})} />

                    <TextInput
                    placeholder="Enter 2nd Number"
                    style={styles.entry}
                    underlineColorAndroid="transparent"
                    onChangeText= {(text) => this.setState({n2:text})} />

                    <TextInput
                    placeholder="Enter 3rd Number"
                    style={styles.entry}
                    underlineColorAndroid="transparent"
                    onChangeText= {(text) => this.setState({n3:text})} />
                    </View>

                <View style={styles.operator}>
                    <View style={styles.oplus}>
                        <Button title="+" 
                        onPress={() => this.calc("+")
                        } > 
                        </Button>
                    </View>

                    <View style={styles.ominus}>
                        <Button title="-" 
                        onPress={() => this.calc("-") }>
                        </Button>
                    </View>

                    <View style={styles.otimes}>
                        <Button title="x" 
                        onPress={() => this.calc("*")}>
                        </Button>
                    </View>

                    <View style={styles.odiv}>
                        <Button title="/" 
                        onPress={() => this.calc("/")}>
                        </Button>
                    </View>
                </View>

                <View style={styles.result}>
                    <Text style={styles.resultText}> hasil = {this.state.nt} </Text>
                </View>

            </View>            
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    number:{
        flex:3, 
        //  backgroundColor: 'green', 
        backgroundColor:'white',
    },

        entry:{
            flex:1,
            width:250,
            margin:10,
            borderColor:"#333",
            borderWidth:1,
        },

    operator:{
        flex:1,
        flexDirection: 'row',
        //  backgroundColor: 'yellow',
        backgroundColor:'white',
    },

        oplus:{
            flex:1,
            // backgroundColor: 'cyan',
            backgroundColor:'white',
            justifyContent: 'space-around',
            alignItems: 'center',
        },

        ominus:{ 
            flex:1,
            // backgroundColor: 'magenta',
            backgroundColor:'white',
            justifyContent: 'space-around',
            alignItems: 'center',
        },

        otimes:{
            flex:1,
            // backgroundColor: 'red',
            backgroundColor:'white',
            justifyContent: 'space-around',
            alignItems: 'center',
        },

        odiv:{
            flex:1,
            // backgroundColor: 'black',
            backgroundColor:'white',
            justifyContent: 'space-around',
            alignItems: 'center',
        },

    result:{
        flex:1,
        // backgroundColor:'blue'
        backgroundColor:'white',
    },

        resultText:{
            fontSize:20,
        },

});

AppRegistry.registerComponent('calcu', () => Calcu);