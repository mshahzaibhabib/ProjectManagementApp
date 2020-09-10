class APIFeatures {
    // Mongoose Query, Query string that we get from Express
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filter() {
        // gives us object nicely formatted with the data from the query string
        // BUILD QUERY
        // 1) Filtering
        const queryObj = { ...this.queryString };
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el]);
        // console.log(this.queryString, queryObj);


        // 2) Advanced filtering
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        // console.log(queryStr);

        // { projectSource: 'Fiverr', duration: { $gte: 5 } }
        // gte, gt, lte, lt
        this.query.find(JSON.parse(queryStr));
        // const query = Project.find(JSON.parse(queryStr));
        return this;
    }
}

module.exports = APIFeatures;