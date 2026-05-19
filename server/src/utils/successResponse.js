module.exports = (res, data = {}, message = "Successful", statusCode = 200) => {
    return res
        .status(statusCode)
        .json({
            success: true,
            message,
            data
        });
}