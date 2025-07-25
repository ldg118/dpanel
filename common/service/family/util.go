package family

import (
	"github.com/donknap/dpanel/common/function"
	"github.com/donknap/dpanel/common/types/define"
	"github.com/gin-gonic/gin"
)

func notSupportedApi(http *gin.Context) {
	http.JSON(500, map[string]interface{}{
		"error": function.ErrorMessage(define.ErrorMessageProLicenseParseErr).Error(),
		"code":  500,
	})
	http.Abort()
	return
}
