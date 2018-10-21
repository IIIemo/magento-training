<?php

namespace Oggetto\Promo\ViewModel\Promo;

use Magento\Framework\View\Element\Block\ArgumentInterface;

class PromoList implements ArgumentInterface
{
    public function getPromotions(): array
    {
        return [
            'TODAY 30% off for t-shirts',
            'Tomorrow 20% off for hats',
            'BUY 3 things – 1 for free'
        ];
    }
}
