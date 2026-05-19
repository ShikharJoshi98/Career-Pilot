const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            console.log(result);
            const errors = result.error.issues.map(issue => {
                return issue.message;
            })
            return res
                .status(400)
                .json({
                    success: false,
                    errors
                });
        }

        req.body = result.data;
        next();
    }
}

module.exports = validate;