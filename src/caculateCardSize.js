function caculateCardSize(layout, cardBaseSize,padding) {
    const tempCardSizeByLayOut = layout.map((page)=>{
        switch (page) {
            case 0:
                const qspLargeSizeCard = cardBaseSize[0]
                const qspMidSizeCard = cardBaseSize[1]
                const qspSmSizeCardMax =  cardBaseSize[1] - padding[1] - padding[1]
                const qspTempCardSize = [qspLargeSizeCard,qspMidSizeCard,qspSmSizeCardMax]
                return qspTempCardSize
            case 1:
                const homeLargeSizeCard = cardBaseSize[0] + 160 //left nav width
                const homeLgToMidSizeCard = cardBaseSize[0]
                const homeMidSizeCard = cardBaseSize[1]
                const homeSmSizeCardMax =  cardBaseSize[1] - padding[1] - padding[1]
                const homeTempCardSize = [homeLargeSizeCard, homeLgToMidSizeCard,homeMidSizeCard, homeSmSizeCardMax]
                return homeTempCardSize
            default:
                return null
        }
    })
    return tempCardSizeByLayOut
 }
export default caculateCardSize;