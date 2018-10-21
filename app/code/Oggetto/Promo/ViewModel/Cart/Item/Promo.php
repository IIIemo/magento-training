<?php

namespace Oggetto\Promo\ViewModel\Cart\Item;

use Magento\Catalog\Model\Product;
use Magento\Framework\View\Element\Block\ArgumentInterface;

class Promo implements ArgumentInterface
{
    public function getPromoId(Product $product): int
    {
        return 1;
    }
}
