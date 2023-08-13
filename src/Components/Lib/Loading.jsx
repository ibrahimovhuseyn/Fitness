import React from 'react'
import { Spinner } from 'reactstrap'


function Loading() {
    return (
        <div>
            <div className="text-center">
                <Spinner>
                    Loading...
                </Spinner>
            </div>
        </div>
    )
}

export default Loading