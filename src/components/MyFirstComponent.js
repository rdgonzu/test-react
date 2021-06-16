import React, {Component} from "react";
class MyFirstComponent extends Component {
    render () {

        let cities = ['Santiago', 'Valparaíso', 'La Serena'];

        return (
            <React.Fragment>

                <h2>This is a text from My First Component</h2>
                <h2>This is another text from My First Component</h2>

                <h3>City list (loop example):</h3>

                <ul>
                    {
                        cities.map((city, i) => {

                            console.log('City: ', city);

                            return (
                                <li key={i}>{city}</li>
                            )

                        })
                    }
                </ul>

            </React.Fragment>
        );
    }
}

export default MyFirstComponent;